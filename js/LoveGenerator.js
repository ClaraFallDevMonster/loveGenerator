function generateLove() {
  const yourName = document.getElementById('yourName').value.trim();
  const crushName = document.getElementById('crushName').value.trim();
  const resultDiv = document.getElementById('result');
  if (!yourName || !crushName) {
    resultDiv.innerHTML = '<p>Bitte gib beide Namen ein.</p>';
    return;
  }

  const percent = Math.floor(Math.random() * 101);
  let description = '';
  if (percent >= 90) {
    description = `${yourName} and ${crushName} are so perfect together, it’s frankly disgusting. You probably finish each other’s sentences, share socks, and cry during the same shampoo commercials. ${yourName} hums when eating cereal and ${crushName} claps when the airplane lands – and yet, somehow, it just works. People around you either gag or apply for therapy. Your love is like a scented candle that smells like pancakes and success. Honestly, if you two ever break up, the moon will probably fall out of the sky and Taylor Swift will write a 12-minute song about the tragedy.`;
  } else if (percent >= 70) {
    description = `${yourName} and ${crushName} could totally make it – if ${yourName} stops talking to their plants like they’re coworkers and ${crushName} finally admits they don’t actually like jazz, they just think it sounds smart. You fit together like weird IKEA parts from different boxes, but hey, duct tape fixes everything. You argue about whether cereal is soup and spend 3 hours choosing a pizza topping, yet somehow still cuddle like two raccoons in a hoodie. Love is confusing. So are you two. But it kind of works.`;
  } else if (percent >= 50) {
    description = `This is one of those 'it depends' relationships. Like, it depends on whether ${yourName} ever learns to chew with their mouth closed and whether ${crushName} stops quoting TikToks like they're Shakespeare. You've both thought about breaking up, but were too lazy to update your dating app bios. You love-hate each other like siblings in a sitcom, and your couple dynamic could best be described as 'chaotic breakfast energy.' It's not a disaster – but it's definitely not something to show your therapist.`;
  } else if (percent >= 30) {
    description = `${yourName} and ${crushName} together? That’s a walking reality show. You argue over how to pronounce 'croissant' and somehow both think pineapple absolutely *does* belong on lasagna. ${yourName} thinks conspiracy theories are romantic and ${crushName} still believes in horoscopes written by a bored intern named Gary. Honestly, your relationship has the emotional stability of a raccoon on Red Bull. But hey – people binge-watch this kind of drama for fun, so maybe you're just ahead of your time.`;
  } else if (percent >= 10) {
    description = `${yourName}, love yourself. ${crushName} still wears socks in the shower 'for grip' and once microwaved a fork. Your love story is less 'Romeo and Juliet' and more 'two pigeons fighting over a breadstick.' You confuse obsession with attraction and call it ‘intense chemistry.’ Spoiler: it’s not. Even your couple selfies look like two strangers stuck in an elevator. Please consider friendship. Or witness protection.`;
  } else {
    description = `No offense, but ${yourName} and ${crushName} make less sense than decaf espresso. One of you collects belly button lint for “art,” the other thinks ketchup is spicy. Your energies repel each other so hard, physics textbooks need an update. When you're together, streetlights flicker and dogs start howling. This isn't love, it's performance art. Somewhere in the universe, a parallel version of you is screaming "DON’T DO IT!"... and honestly, they’re right.`;
  }
  resultDiv.innerHTML = `<div class="percentage">${percent}%</div><div class="description">${description}</div>`;
}