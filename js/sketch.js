class Sketch extends Engine {
  setup() {

    // parameters
    this._min_size = 20;
    this._max_faded_r = 400;
    this._duration = 900;
    this._recording = true;
    this._titles = ["LOOK AROUND YOU", "NOTHING MAKES SENSE", "BUT HAS IT EVER?"];
    // internal variables
    this._letters = this._titles.join(" ").split("");
    this._letters.push(" ");
    this._max_size = this._width / 2 * Math.SQRT2 - 150;
    // initialize page
    console.clear();
    document.title = this._titles[0];
  }

  draw() {
    // check if record has ended
    if (this._frameCount > this._duration && this._recording) {
      this._recording = false;
      console.log("%c ENDED", "color: red; font-size: 2rem");
    }

    this._ctx.save();
    this.background("black");
    this._ctx.translate(this._width / 2, this._height / 2);

    // init distance from center
    let r = this._max_size;
    let count = 1;
    while (r > this._min_size) {
      const alpha = r > this._max_faded_r == 1 ? 1 : (r / this._max_faded_r); // text transparency
      const d_theta = Math.PI * 2 / this._letters.length; // angle between letters
      const size = 2 * Math.PI * r / this._letters.length * 1.4; // text size
      const d_phi = Math.PI * 2 * this.easeInOut(this._frameCount / this._duration) * count - Math.PI; // "line" rotation
      const dir = count % 2 == 0 ? 1 : -1; // rotation direction

      this._ctx.rotate(d_phi * dir);
      for (let i = 0; i < this._letters.length; i++) {
        this._ctx.save();
        this._ctx.rotate(-d_theta * i);
        this._ctx.translate(r, 0);
        this._ctx.rotate(-Math.PI / 2);
        this._ctx.font = `${size}px Hack-Bold`;
        this._ctx.textAlign = "center";
        this._ctx.textBaseline = "middle";
        this._ctx.fillStyle = `rgba(220, 220, 220, ${alpha})`;
        this._ctx.fillText(this._letters[i], 0, 0);
        this._ctx.restore();
      }

      // increase linecount and radius
      count++;
      r -= r * 0.15;
    }


    this._ctx.restore();

    /*
    this._ctx.fillStyle = "red";
    this._ctx.fillText(this._frameRate, 30, 30);
    */

    // check if it's time to change the title
    if (this._frameCount % 30 == 0) {
      const index = parseInt(this._frameCount / 30) % this._titles.length;
      document.title = this._titles[index];
    }

    // if it's needed, save the frame
    if (this._recording) {
      this.saveFrame();
    }
  }

  // smoothing functions
  easeIn(x) {
    return 1 - Math.cos((x * Math.PI) / 2);
  }

  easeInOut(x) {
    return -(Math.cos(Math.PI * x) - 1) / 2;
  }
}
