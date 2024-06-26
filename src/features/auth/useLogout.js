import { useMutation, useQueryClient } from "@tanstack/react-query";
import logoutApi from "../../API/logout";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { status, mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      toast.success("Logged out successfully");
      localStorage.removeItem("tokens");
      queryClient.resetQueries({
        queryKey: ["user"],
      });
      navigate("/");
    },
    onError: (err) => console.error(err),
  });
  return { status, logout };
}
