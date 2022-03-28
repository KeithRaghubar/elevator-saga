// Challenge #2: Transport 20 people in 60 seconds or less

{
    init: function(elevators, floors) {
        function removeItem(arr, item) {
            arr = arr.filter(i => i !== item);
            return arr;
        }
        var elevator = elevators[0]; // Let's use the first elevator
        elevator.destinationQueue = [];
        elevator.checkDestinationQueue();

        // Whenever the elevator is idle (has no more queued destinations)
        elevator.on("idle", function() {
            elevator.goToFloor(0);
            elevator.goingDownIndicator(true);
            elevator.goingUpIndicator(true);
        });
        
        elevator.on("floor_button_pressed", function(floorNum) {
            elevator.goToFloor(floorNum)
            if (elevator.loadFactor == 1){
                elevator.goToFloor(elevator.getPressedFloors().pop(), true)
            }
        });
        
        elevator.on("stopped_at_floor", function(floorNum) {
            elevator.destinationQueue = removeItem(elevator.destinationQueue, floorNum)
        })
        
        floors[0].on("up_button_pressed", function() {
            elevator.goToFloor(0)
        });

        floors[1].on("up_button_pressed", function() {
            elevator.goToFloor(1)
        });

        floors[1].on("down_button_pressed", function() {
            elevator.goToFloor(1)
        });

        floors[2].on("up_button_pressed", function() {
            elevator.goToFloor(2)
        });

        floors[2].on("down_button_pressed", function() {
            elevator.goToFloor(2)
        });

        floors[3].on("up_button_pressed", function() {
            elevator.goToFloor(3)
        });

        floors[3].on("down_button_pressed", function() {
            elevator.goToFloor(3)
        });

        floors[4].on("down_button_pressed", function() {
            elevator.goToFloor(4)
        });
    },
    update: function(dt, elevators, floors) {
        console.clear()
        console.log(elevators[0].destinationQueue)
    }
}
