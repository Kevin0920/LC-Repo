/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {

    if (!intervals || intervals.length === 1) return true;

    let sorted = intervals.sort((a, b) => a[0] - b[0]); // sort intervals in case meeting tiem is in the back
    for (let i = 0; i < sorted.length - 1; i++) {
        if (sorted[i][1] > sorted[i + 1][0]) return false;
    }
    return true;

    // for( var i=0; i<intervals.length-1; i++ ){ 
    // // loop through intervals and stop right before the last 
    // // interval, to save step cuz our check involves checking next interval
    //     if( intervals[i].end > intervals[i+1].start ) return false; 
    //     // if the end time is greater than the next interval's
    //     // start time it has to be false
    // }
    // return true; // if there aren't any crossing intervals, its true
};

/*

Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

Example 1:

Input: [[0,30],[5,10],[15,20]]
Output: false
Example 2:

Input: [[7,10],[2,4]]
Output: true

*/