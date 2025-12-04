"use client"
import Button from "@/components/ui/Button";

const NotFound = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col">
      <h1>This page is under construction</h1>
      <Button onClick={() => console.log("hello")} className="bg-blue-600">
        Back to Home
      </Button>
    </div>
  );
};

export default NotFound;
