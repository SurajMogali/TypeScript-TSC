"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.filter = filter;
    }
    getReelTime() {
        //some complex calculation
        return 8;
    }
}
class Instagram2 extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSapia() {
        console.log("Sepia");
    }
}
//You can always create the object of the class which is inherited from the abstract class
const hc = new Instagram2("test", "Test", 3);
hc.getReelTime;
// class Instagram extends TakePhoto{
// }
