// Add JavaScript below
//Import client 
import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.10.0"

const supabaseUrl = 'https://cmxhrzsqtokwzbxpdpvi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNteGhyenNxdG9rd3pieHBkcHZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgwNzI5MTEsImV4cCI6MTk5MzY0ODkxMX0.Psl30r8Ubvc_BeiL9slYDSyD_jZnVEuh6L9LHMAn8jA'
const supabase = createClient(supabaseUrl, supabaseKey)

//Read all rows
let { data: Books, error } = await supabase
  .from('Books')
  .select('*')

for (let Book of Books) {
  let BookList = document.getElementById('Books');
  BookList.innerHTML += `<tr><td>${Book.Title}</td><td>${Book.Author}</td><td>${Book.ISBN}</td><td>${Book.Description}</td></tr>`;
}