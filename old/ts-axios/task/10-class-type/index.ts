// 实例接口
interface ClockInterface {
    tick()
}
// 构造器接口
interface ClockConstructor {
    new(hour:number,minute:number):ClockInterface
}
function createClock(ctor: ClockConstructor, hour: number, minute: number) {

}
