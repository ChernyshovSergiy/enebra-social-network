export class Message {
    avatar: string;
    fullName: string;
    date: Date;
    guarantyQuery: boolean;
    newMsg: boolean;
    myMsgLast?: boolean;
    firstBtnTitle?: string;
    lastBtnTitle?: string;
    mySelf?: string;
    msg?: string;
    state?: string;

    constructor(
        avatar: string,
        fullName: string,
        date: Date,
        guarantyQuery: boolean,
        newMsg: boolean,
        myMsgLast?: boolean,
        firstBtnTitle?: string,
        lastBtnTitle?: string,
        mySelf?: string,
        msg?: string,
        state?: string,
    ) {
        this.avatar = avatar;
        this.fullName = fullName;
        this.date = date;
        this.guarantyQuery = guarantyQuery;
        this.newMsg = newMsg;
        this.myMsgLast = myMsgLast;
        this.firstBtnTitle = firstBtnTitle;
        this.lastBtnTitle = lastBtnTitle;
        this.mySelf = mySelf;
        this.msg = msg;
        this.state = state;
    }
}
