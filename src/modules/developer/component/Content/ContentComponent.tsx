import { CardListComponent } from "@/modules/developer/component/Content/CardList";
import classesContent from "@/modules/developer/component/Content/content.module.scss";
import globalClasses from "@/styles/global.module.scss";
import { ContentButton } from "@/ui/ContentButton";
import { useDevelopers } from "@/modules/developer/context";
import { useSearchParams } from "react-router-dom";

export const ContentComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { metadata } = useDevelopers();

  const currentPage = searchParams.get("page");

  return (
    <div className={globalClasses.section}>
      <div className={classesContent.wrapper}>
        <div className={classesContent.title}>Working with GET request</div>
        <CardListComponent />
        {metadata?.total_pages &&
          currentPage &&
          +currentPage < metadata?.total_pages && (
            <ContentButton
              onClick={() => {
                const currentPage = searchParams.get("page");

                if (currentPage) {
                  searchParams.set("page", String(+currentPage + 1));
                }
                setSearchParams(searchParams);
              }}
            >
              Show more
            </ContentButton>
          )}
      </div>
    </div>
  );
};
