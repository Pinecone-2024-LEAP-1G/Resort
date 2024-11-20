"use-client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const HostCardView = () => {
return(
<Card>
  <CardHeader>
    <CardTitle>Sebastion</CardTitle>
    <CardDescription>Superhost</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
)} 
export default HostCardView


