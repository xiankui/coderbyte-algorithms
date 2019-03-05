/**
 * Simple clock angle
 * @desc You will be given a number N that represents where the minute hand currently is on a clock.
 *       Your program should return the angle that is formed by the minute hand and the 12 o'clock mark on the clock.
 */

function simpleClockAngle(num) {

  // we got 6 because 360/60 = 6
  // 360 represents the full number of a degrees in a circle and
  // 60 is the number of minutes on a clock, so dividing these two numbers
  // gives us the number of degrees for one minute
  return 6 * num;

}

simpleClockAngle(15); // 90

function multiClockAngle(h, m) {
  // get the Hour degree to 12 o'clock
  // we got 360/60    = 6   degrees per minute
  // we got 5*6       = 30  degrees per hour
  // we got (m/12)*6  = ?   degrees more hour
  const h_degrees = h * 30;
  const m_degrees = m * 6;
  const h_degrees_more = (m / 12) * 6;

  return m_degrees - h_degrees - h_degrees_more;
}

multiClockAngle(2, 20); // 50

// hidden runtime response
window.global = {
  runtimeRes: `
      <span>simpleClockAngle(15) is</span> ${simpleClockAngle(15)}
      <span>multiClockAngle(15) is</span> ${multiClockAngle(2, 20)}
    `
};
