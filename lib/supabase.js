import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://apuvaaiqnzlwvzwqescf.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwdXZhYWlxbnpsd3Z6d3Flc2NmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIyNTMwNjcsImV4cCI6MjAwNzgyOTA2N30.brAyjguKMQiIAHBWYrpIAyohjBYy_DNW34aeXM5-8Iw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)