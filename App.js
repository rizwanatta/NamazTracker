import { StatusBar } from "expo-status-bar";
import { BaseNavigation } from "./src/navigations/baseNavigiation";

export default function App() {
  return (
    <>
      <BaseNavigation />
      <StatusBar style="auto" />
    </>
  );
}
