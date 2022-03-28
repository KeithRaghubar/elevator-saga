// Challenge #4: Transport 28 people in 60 seconds or less

{
    init: function(elevators, floors) {
        // Remove all occurences of item from array arr
        function removeItem(arr, item) {
            arr = arr.filter(i => i !== item);
            return arr;
        }
		
		// Get elevator with most capacity
		function getElevator(){
			if (elevators[0].loadFactor < elevators[1].loadFactor){
				return elevators[0]
			}
			return elevators[1]
		}

        // Whenever elevators[0] is idle (has no more queued destinations)
        elevators[0].on("idle", function() {
            elevators[0].goToFloor(0);
            elevators[0].goingDownIndicator(true);
            elevators[0].goingUpIndicator(true);
        });

        elevators[0].on("floor_button_pressed", function(floorNum) {
            elevators[0].goToFloor(floorNum)
            if (elevators[0].loadFactor == 1){
                elevators[0].goToFloor(elevators[0].getPressedFloors().pop(), true)
            }
        });

        elevators[0].on("stopped_at_floor", function(floorNum) {
            elevators[0].destinationQueue = removeItem(elevators[0].destinationQueue, floorNum)
			elevators[0].checkDestinationQueue()
        })
		
		// Whenever elevators[1] is idle (has no more queued destinations)
        elevators[1].on("idle", function() {
            elevators[1].goToFloor(0);
            elevators[1].goingDownIndicator(true);
            elevators[1].goingUpIndicator(true);
        });

        elevators[1].on("floor_button_pressed", function(floorNum) {
            elevators[1].goToFloor(floorNum)
            if (elevators[1].loadFactor == 1){
                elevators[1].goToFloor(elevators[1].getPressedFloors().pop(), true)
            }
        });

        elevators[1].on("stopped_at_floor", function(floorNum) {
            elevators[1].destinationQueue = removeItem(elevators[1].destinationQueue, floorNum)
			elevators[1].checkDestinationQueue()
        })

        floors[0].on("up_button_pressed", function() {
			getElevator().goToFloor(0)
        });

        floors[1].on("up_button_pressed", function() {
            getElevator().goToFloor(1)
        });

        floors[1].on("down_button_pressed", function() {
            getElevator().goToFloor(1)
        });

        floors[2].on("up_button_pressed", function() {
            getElevator().goToFloor(2)
        });

        floors[2].on("down_button_pressed", function() {
            getElevator().goToFloor(2)
        });

        floors[3].on("up_button_pressed", function() {
            getElevator().goToFloor(3)
        });

        floors[3].on("down_button_pressed", function() {
            getElevator().goToFloor(3)
        });

        floors[4].on("up_button_pressed", function() {
            getElevator().goToFloor(4)
        });

        floors[4].on("down_button_pressed", function() {
            getElevator().goToFloor(4)
        });

        floors[5].on("up_button_pressed", function() {
            getElevator().goToFloor(5)
        });

        floors[5].on("down_button_pressed", function() {
            getElevator().goToFloor(5)
        });

        floors[6].on("up_button_pressed", function() {
            getElevator().goToFloor(6)
        });

        floors[6].on("down_button_pressed", function() {
            getElevator().goToFloor(6)
        });

        floors[7].on("down_button_pressed", function() {
            getElevator().goToFloor(7)
        });
    },
        update: function(dt, elevators, floors) {
            console.clear()
            console.log(elevators[0].destinationQueue)
            console.log(elevators[1].destinationQueue)
        }
}
