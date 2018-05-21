
//这是一个事件管理类
//越写越迷糊
interface EventCell<T,F>
{   //这里用不用加约束？  target对象中必须有func这个方法
    target:T;
    func:{function(eventType:string,...args:F[]):void}
}

class EventManager
{
    public static readonly  Instance:EventManager = new EventManager();
    //这里需要实现它，怎么写这个
    private event_list: { [key: string]:Array<EventCell>; };

    private EventManager()
    {

    }

    public addEvent(eventType:string,tag_event:EventCell)
    {
        this.event_list[eventType].push(tag_event);
    }

    public dispatchEvent<T>(eventType: string,...args:T[])
    {
        if(this.event_list[eventType] != null )
        {

        }
    }

    public removeEvent(eventType:string)
    {
        this.event_list[eventType] = null;
    }
    

}