export class globalSettingModel {
    id: number;
    day: string;
    constructor(data){
        if(!data) {
            return null;
        } else {
            this.id = data.id;
            this.day = data.day;
        }
    }
}