import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { login as loginApi } from "../../API/login";

export default function useLogin() {
  const queryClient = useQueryClient();
  const { status, mutate } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      console.log(data);
      toast.success("Logged in successfully");
      window.localStorage.setItem("tokens", JSON.stringify(data));
      queryClient.resetQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => {
      console.log(err.response);
      toast.error(err.response.data.message);
    },
  });
  return { status, mutate };
}
