
export async function  GET(req: Request) {
  console.log('response loading')
   return new Response(
    JSON.stringify({ message: "Hello" }),
    {
        headers: {
            "Content-Type": "application/json"
        }       
    }   
   )
}