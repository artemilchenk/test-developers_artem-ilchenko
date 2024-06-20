import { useMutation, useQuery, useQueryClient } from "react-query";
import { developerService } from "@/modules/developer";
import { useSearchParams } from "react-router-dom";

export const useDevelopersApi = () => {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();

  const { data, isLoading: isFetchDataLoading, isError: isFetchDataError } = useQuery(["developers", searchParams.toString()], () => {
    if (!searchParams.toString()) {
      searchParams.set("page", "1");
      searchParams.set("count", "6");
      setSearchParams(searchParams);
    } else {
      return developerService.getDevelopers(
        "https://frontend-test-assignment-api.abz.agency/api/v1/users?" +
          searchParams.toString()
      );
    }
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { mutateAsync, isLoading: isLoadingRegister } = useMutation({
    mutationFn: developerService.registerDeveloper.bind(developerService),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["developers"] });
    },
  });

  return { data, mutateAsync, isLoadingRegister, isFetchDataLoading, isFetchDataError};
};
