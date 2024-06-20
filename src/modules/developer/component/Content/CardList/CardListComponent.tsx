import classes from "./card-list.module.scss";
import {CardComponent} from "@/modules/developer/component/Content/Card";
import {useDevelopersData} from "@/modules/developer/context";
import {v4 as uuidv4} from "uuid";
import {useDevelopersApi} from "@/modules/developer/hook";
import {LocalFetchError} from "@/ui/notification/fetch/local/error/LocalFetchError";
import {LocalFetchWarning} from "@/ui/notification/fetch/local/warning";

export const CardListComponent = () => {
    const {developers} = useDevelopersData();
    const {isFetchDataLoading, isFetchDataError} = useDevelopersApi();

    if (isFetchDataLoading) return (
        <LocalFetchWarning>
            Data is fetching...
        </LocalFetchWarning>
    )

    if (isFetchDataError) return (
        <LocalFetchError>
            Can not fetch data...
        </LocalFetchError>
    )

    return (
        <div className={classes.cardList}>
            {developers?.length && developers.map((card, index) => {
                    return (
                        <CardComponent
                            key={uuidv4()}
                            entity={{...card, id: index + 1 + ""}}
                        />
                    );
                }
            )}
        </div>
    );
};
