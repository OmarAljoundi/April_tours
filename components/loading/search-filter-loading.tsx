import { Skeleton } from "../ui/skeleton";

const SearchFilterLoading = () => {
  return (
    <section>
      <div className="p-3 mt-8 sm:p-4 lg:py-6 lg:px-8 bg-white  shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Skeleton className="h-9  px-3" />
        <Skeleton className="h-9  px-3" />
        <Skeleton className="h-9  px-3" />
        <Skeleton className="h-9  px-3" />
      </div>
    </section>
  );
};

export default SearchFilterLoading;
