import { UserContextProvider } from "../store/user-context";
import Level from "./Level";

export default function MainLevelComponent() {
  return (
    <UserContextProvider>
        <Level />
    </UserContextProvider>
  );
}