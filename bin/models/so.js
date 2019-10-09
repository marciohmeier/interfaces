"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class So {
    constructor(drive) {
        this.drive = drive;
    }
    readDisk() {
        this.drive.read();
    }
    writeDisk() {
        this.drive.write();
    }
    deleteDisk() {
        this.drive.delete();
    }
}
exports.So = So;
