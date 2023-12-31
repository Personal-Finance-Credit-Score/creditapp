import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { SafeAreaView, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import Auth from "./Auth";
import utils from "../../api/users/index";
import Avatar from "../../assets/Avatar.png";
import Logo from "../../assets/riseLogo.png";
import { LineChart } from "react-native-chart-kit";
import { supabase } from "../../lib/supabase";

const Homescreen = (props) => {
  const { session } = props;
  const navigation = useNavigation(null);
  const [creditScores, setCreditScores] = useState([]);
  const [selectedRange, setSelectedRange] = useState("3 month");
  const [isLoading, setIsLoading] = useState(true);

  console.log(`This is within Homescreen ${session.user.id}`);
  const sessionUserId = session.user.id;

  async function getCustomerId() {
    const { data, error } = await supabase
      .from("customer")
      .select("customer_id")
      .eq("user_id", sessionUserId)
      .single();

    if (error) {
      console.error("Error fetching customer data:", error.message);
      return null;
    }

    if (data) {
      return data.customer_id;
    }

    return null;
  }

  getCustomerId().then((customerId) => {
    if (customerId !== null) {
      console.log("Customer ID:", customerId);
    } else {
      console.log("Customer not found.");
    }
  });

  useEffect(() => {
    async function fetchCreditScores() {
      try {
        const { data, error } = await supabase
          .from("historicalcreditscores")
          .select("credit_score", "timestamp")
          .eq("credit_bureau", "Equifax")
          .gte("timestamp", "2022-07-17T00:00:00Z")
          .order("timestamp", { ascending: true });

        if (error) {
          console.error("Error fetching credit scores:", error.message);
          return [];
        }

        if (data) {
          const sortedData = data.sort(
            (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
          );

          const scores = sortedData.map((item) => item.credit_score);
          setCreditScores(scores);
        }
      } catch (error) {
        console.error("Error fetching credit scores:", error.message);
      } finally {
        setIsLoading(false); // Update loading state after fetch
      }
    }

    fetchCreditScores();
  }, [selectedRange]);

  const handleRangeSelect = (range) => {
    setSelectedRange(range);
  };

  const getDisplayedScores = () => {
    if (selectedRange === "3 month") {
      return creditScores.slice(-3);
    } else if (selectedRange === "6 month") {
      return creditScores.slice(-6);
    } else if (selectedRange === "1 year") {
      return creditScores.slice(-12);
    }
  };

  if (isLoading) {
    return; // Render a loading indicator while fetching data
  }

  return (
    <SafeAreaView className="flex-1 min-h-screen min-w-screen bg-themeLightBlue">
      {/* Navbar */}
      <TouchableOpacity>
        <View className="h-1/8 pt-10 mb-1">
          <View className="flex-row mt-2 mb-[20px] mr-2 justify-between ml-4 items-center">
            <Image className="ml-2 w-[37px] h-[37px]" source={Logo} />
            <Image className="mr-4" source={Avatar} />
          </View>
          <View className="shadow shadow-black "></View>
        </View>
      </TouchableOpacity>
      <ScrollView>
        <View className="mb-32">
          <View>
            <Text className="text-4xl font-bold text-themeNavyBlue mb-3 ml-5">
              Your Credit Score
            </Text>
          </View>

          {/* container for credit bureaus */}
          <View className="flex-1 flex-row justify-around">
            <View>
              <TouchableOpacity
                className="flex align-middle border-4 border-solid border-themeGreen w-24 h-24 rounded-full"
                onPress={() => navigation.navigate("LoadingScreen")}
              >
                <Text className="text-2xl text-center font-medium my-auto">
                  754
                </Text>
              </TouchableOpacity>
              <Text className="text-center text-lg">Transunion</Text>
            </View>

            <View>
              <TouchableOpacity
                className="bg-themeLightBlue border-4 border-solid border-themeGreen w-24 h-24 rounded-full"
                onPress={() => navigation.navigate("LoadingScreen")}
              >
                <Text className="text-2xl text-center font-medium my-auto">
                  734
                </Text>
              </TouchableOpacity>
              <Text className="text-center text-lg">Equifax</Text>
            </View>

            <View>
              <TouchableOpacity
                className=" border-4 border-solid border-themeGreen w-24 h-24 rounded-full"
                onPress={() => navigation.navigate("LoadingScreen")}
              >
                <Text className="text-2xl text-center font-medium my-auto">
                  782
                </Text>
              </TouchableOpacity>
              <Text className="text-center text-lg">Experian</Text>
            </View>
            <View className="bg-themeLightBlue h-[100%]"></View>
          </View>
          <Text></Text>
          <View className="">
            <Text className="text-xl text-center my-auto mt-1 mb-3">
              Next check: tomorrow
            </Text>
          </View>

          {/* total debt and credit usage titles */}
          <View className="rounded-t-xl ml-5 mr-5 flex-row justify-between bg-themeGreen ">
            <View>
              <Text className="text-xl ml-2 p-2 ">Total Debt: </Text>
            </View>
            <View>
              <Text className="text-xl mr-2 p-2">Credit Usage: </Text>
            </View>
          </View>

          {/* total debt and credit usage info */}
          <View className="rounded-b-xl ml-5 mr-5 flex-row bg-themeGreen justify-between p-4">
            <View>
              <Text className="text-xl p-2 font-bold">$5,000 </Text>
            </View>
            <View>
              <Text className="text-xl p-2 font-bold">21% </Text>
            </View>
          </View>

          {/* button to view credit report */}
          <View>
            <TouchableOpacity
              className="bg-themeNavyBlue justify-around align-center h-12 mr-[20px] ml-[20px] mt-2"
              onPress={() => navigation.navigate("CreditReport")}
            >
              <Text className="text-themeWhite text-center">
                View Full Credit Report
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text className="text-themeNavyBlue text-3xl font-bold ml-5 mt-5">
              Score History
            </Text>
          </View>

          {/* ------------------- LINE GRAPH ------------------- */}
          <View className="rounded-xl border-2 border-solid flex-row p-3 justify-around ml-5 mr-5 items-center bg-themeWhite">
            <View>
              <View className="flex-row pb-2">
                <TouchableOpacity onPress={() => handleRangeSelect("3 month")}>
                  <Text
                    className={
                      selectedRange === "3 month" ? "px-2 selected" : "px-2"
                    }
                  >
                    3 month
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleRangeSelect("6 month")}>
                  <Text
                    className={
                      selectedRange === "6 month" ? "px-2 selected" : "px-2"
                    }
                  >
                    6 month
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleRangeSelect("1 year")}>
                  <Text
                    className={
                      selectedRange === "1 year" ? "px-2 selected" : "px-2"
                    }
                  >
                    1 year
                  </Text>
                </TouchableOpacity>
              </View>
              <LineChart
                data={{
                  yAxisLabel: "asdf",
                  datasets: [
                    {
                      data: getDisplayedScores(),
                    },
                  ],
                }}
                width={345}
                height={220}
                withInnerLines={false}
                yAxisInterval={1}
                chartConfig={{
                  backgroundColor: "#FFFFFF",
                  backgroundGradientFrom: "#FFFFFF",
                  backgroundGradientTo: "#FFFFFF",
                  decimalPlaces: 0,
                  color: (opacity = 1) => "#2B816B",
                  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#2B816B",
                  },
                }}
              />
            </View>
          </View>

          {/* --------------------------------------------------- */}

          <View>
            <Text></Text>
          </View>
          <View>
            <Text className="text-themeNavyBlue text-3xl ml-5 mt-3 mb-2">
              Credit Factors
            </Text>
          </View>
          <View>
            <TouchableOpacity
              className="rounded-xl flex-1 h-12 flex-row p-3 justify-around ml-5 mr-5 mb-2 items-center bg-themeGreen"
              onPress={() => {
                navigation.navigate("PaymentHistory");
              }}
            >
              <Text className="text-themeWhite font-bold">Payment History</Text>
              <Text className="text-themeWhite font-bold">98%</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="rounded-xl flex-1 h-12 flex-row p-3 justify-around ml-5 mr-5 mb-2 items-center bg-themeGreen"
              onPress={() => {
                navigation.navigate("CreditCardUse");
              }}
            >
              <Text className="text-themeWhite font-bold">Credit Card Use</Text>
              <Text className="text-themeWhite font-bold">20%</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-1 justify-center bg-themeLightBlue">
            <TouchableOpacity
              className="rounded-xl flex-1 h-12 flex-row p-3 justify-around ml-5 mr-5 mb-2 items-center bg-themeGreen"
              onPress={() => {
                navigation.navigate("DerogatoryMarks");
              }}
            >
              <Text className="text-themeWhite font-bold">
                Derogatory Marks
              </Text>
              <Text className="font-bold text-themeWhite">0%</Text>
            </TouchableOpacity>
            <View className="flex-row">
              <TouchableOpacity
                className="rounded-xl flex-1 flex-col p-3 justify-around ml-[25px] mr-[22px] mb-2 items-center h-[100px] w-[143px] bg-themeGreen"
                onPress={() => {
                  navigation.navigate("CreditAge");
                }}
              >
                <Text className="text-themeWhite font-bold mt-3">
                  Credit Age
                </Text>
                <Text className="text-themeWhite font-semibold mb-5">
                  5 yrs, 4 mos
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="rounded-xl flex-1 flex-col p-3 justify-around ml-[22] mr-[25px] mb-2 items-center w-[143px] bg-themeGreen"
                onPress={() => {
                  navigation.navigate("CreditAge");
                }}
              >
                <Text className="text-themeWhite font-bold mt-3">
                  Total Accounts
                </Text>
                <Text className="text-themeWhite font-semibold mb-5">5</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            className="rounded-xl flex-1 flex-col p-3 justify-around self-center mb-0 mt-0 items-center w-[143px] bg-themeGreen"
            onPress={() => {
              navigation.navigate("HardInquiries");
            }}
          >
            <Text className="text-themeWhite font-bold mt-3">
              Hard Inquiries
            </Text>
            <Text className="text-themeWhite font-semibold mt-2 mb-5">3</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homescreen;
