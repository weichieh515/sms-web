import { ApiService, List } from './api.service';
export class ListBase {

    data: List;
    isLoading: boolean;

    constructor(protected apiService: ApiService) { }

    onScroll() {
        if (this.data.nextPage) { this.getData(this.data.nextPage); }
    }

    getData(page: number) {
        this.isLoading = true;
        this.apiGetData(page)
            .then((res: List) =>
                this.data = this.updateList(this.data, res)
            )
            .catch(err =>
                console.error(err)
            )
            .finally(() =>
                this.isLoading = false
            );
    }

    protected apiGetData(page: number): Promise<List> {
        return this.apiService.getReply(page);
    }

    private updateList(oldList, newList) {
        if (oldList) { newList.docs = oldList.docs.concat(newList.docs); }
        return newList;
    }

}
