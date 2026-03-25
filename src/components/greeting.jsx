import { useEffect } from "react"

export default function TodoList() {
useEffect(()=> {
  async function fetchUser() {
    try{
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json()
      console.log(data)
    } catch(err){}
  }
  fetchUser()
}, [])
  return (
    <>
   <div>user list</div>
    </>
  )
}
