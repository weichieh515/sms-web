import { Input, OnChanges } from '@angular/core';
import { ApiService, List } from './api.service';
export class ListBase implements OnChanges {

    @Input() filter: any;
    data: List;
    isLoading: boolean;
    protected topId: string;

    constructor(protected apiService: ApiService) { }

    ngOnChanges() {
        this.topId = undefined;
        this.data = undefined;
        this.getData(1);
    }

    onScroll() {
        if (this.data.nextPage) { this.getData(this.data.nextPage); }
    }

    getData(page: number) {
        this.isLoading = true;
        this.apiGetData(this.filter, page, this.topId)
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

    protected apiGetData(filter: any, page: number, topId: string): Promise<List> {
        return this.apiService.getReply(filter, page, topId);
    }

    private updateList(oldList, newList) {
        oldList ? newList.docs = oldList.docs.concat(newList.docs) :
            this.topId = newList.docs[0] ? newList.docs[0]._id : null;
        return newList;
    }

}
