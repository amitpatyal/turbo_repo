import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "@repo/services";

export const useUsersData = () => {
  console.log("✅ QueryProvider mounted with client:");
  return useQuery({
    queryKey: ["usersData"],
    queryFn: () => fetchUsers(),
  });
};
