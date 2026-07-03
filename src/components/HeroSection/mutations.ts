import { subscribeAPI } from "@/apis/SubscribeAPI";
import type { SubscribeDataType } from "@/lib/schema";
import { useMutation } from "@tanstack/react-query";

export const useSubscribeToProductMutation = () => {
  const handleSubscribeToProduct = async (payload: SubscribeDataType) => {
    try {
      await subscribeAPI({ ...payload });
    } catch (error) {
      console.log(error);
    }
  };

  return useMutation({
    mutationKey: ["subscribe", "product"],
    mutationFn: handleSubscribeToProduct,
  });
};
