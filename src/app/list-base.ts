import { ApiService, List } from './api.service';
export class ListBase {

    data: List;
    isLoading: boolean;
    protected topId: string;

    constructor(protected apiService: ApiService) { }

    onScroll() {
        if (this.data.nextPage) { this.getData(this.data.nextPage); }
    }

    getData(page: number) {
        this.isLoading = true;
        this.apiGetData(page, this.topId)
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

    protected apiGetData(page: number, topId: string): Promise<List> {
        return this.apiService.getReply(page, topId);
    }

    private updateList(oldList, newList) {
        oldList ? newList.docs = oldList.docs.concat(newList.docs) :
            this.topId = newList.docs[0]._id;
        return newList;
    }

}
