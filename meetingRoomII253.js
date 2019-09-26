/**
 * @param {number[][]} intervals
 * @return {number}
 Time Complexity: O(N) Space Complexity: O(N)
 */
var minMeetingRooms = function(intervals) {
    if (intervals === null || intervals.length === 0) return 0;

    let start = [],
        end = [];

    for (let i = 0; i < intervals.length; i++) {
        start.push(intervals[i][0]);
        end.push(intervals[i][1]);
    }

    start = start.sort((a, b) => a - b);
    console.log(start)
    end = end.sort((c, d) => c - d);
    console.log(end)
    let endIdx = 0,
        room = 0;

    for (let i = 0; i < start.length; i++) {
        if (start[i] < end[endIdx]) {
            room++;
        } else {
            endIdx++;
        }
    }
    return room;
};

var data = [
    [0, 30],
    [5, 10],
    [15, 20]
]

console.log(minMeetingRooms(data));