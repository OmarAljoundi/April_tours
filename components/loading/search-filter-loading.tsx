import { Skeleton } from "../ui/skeleton";

const SearchFilterLoading = () => {
  return (
    <div>
      <div className="p-3 mt-8 sm:p-4 lg:py-6 lg:px-8 bg-white  shadow-lg mb-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Skeleton className="h-9  px-3" />
        <Skeleton className="h-9  px-3" />
        <Skeleton className="h-9  px-3" />
        <Skeleton className="h-9  px-3" />
      </div>
    </div>
  );
};

export default SearchFilterLoading;
