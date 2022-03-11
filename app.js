class NieRTyping {
  constructor(string) {
    this.string = string;
  }

  call() {
    const result = [];
    for (let i = 0; i <= this.string.length - 1; i += 1) {
      const char = this.string[i];
      const current_string = this.string.slice(0, i);
      const max_type = 3;
      let typed_times = 0;
      let is_equal = true;

      while (is_equal) {

        const random_char = this.get_random();
        const typed = current_string + random_char;
        result.push(typed);

        typed_times += 1;

        if (random_char === char) { is_equal = false; }
        if (typed_times === max_type) {
          is_equal = false;
          result.push(current_string + char);
        }

      }
    }
    return result;
  }

  get_random() {
    const { length } = this.string;
    const index = Math.floor(Math.random() * length);
    return this.string[index];
  }
}

function run() {
  const aodnawg = document.getElementById('string');
  const { innerText } = aodnawg;
  const nier_type = new NieRTyping(innerText);
  const nier_types = nier_type.call();

  let delay = 0;
  for (let nt of nier_types) {
    setTimeout(() => {
      document.getElementById('string').innerText = nt;
    }, delay)
    delay += 40;
  }
}

window.onload = () => {
  run();

  const trigger =document.getElementById('trigger');
  trigger.addEventListener('click', () => {
    run();
  });
};
