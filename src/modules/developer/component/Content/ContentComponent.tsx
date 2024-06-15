import { CardListComponent } from "@/modules/developer/component/Content/CardList";
import classesContent from "@/modules/developer/component/Content/content.module.scss";
import globalClasses from "@/styles/global.module.scss";
import { ContentButton } from "@/ui/ContentButton";
import { useDevelopers } from "@/modules/developer/context";
import { useSearchParams } from "react-router-dom";

export const ContentComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { metadata } = useDevelopers();

  return (
    <div className={globalClasses.section}>
      <div className={classesContent.wrapper}>
        <div className={classesContent.title}>Working with GET request</div>
        <CardListComponent />
        {+searchParams.get("page") < metadata?.total_pages && (
          <ContentButton
            onClick={() => {
              searchParams.set("page", String(+searchParams.get("page") + 1));
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
