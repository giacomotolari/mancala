import './rules.css';
const Rules = () => {
  return (
    <div className='Rules'>
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/OX7rj93m6o8'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
      <section>
        <p>
          <span>Objective:</span> To collect as many seeds in your store as
          possible. The player with the most seeds in his/her store at the end
          of the game wins.
        </p>
        <p>
          <span>Set Up:</span>Place four seeds in each of the six pits on your
          side of the game board. Your opponent should do the same. The colors
          of the seeds don’t matter. (For a shorter game, you can play with
          three seeds in each pit.)
        </p>
        <div className='imageRules1'></div>
        <p>
          <span>Basic Rules:</span>
          <br />
          * Play always moves around the board in a counter-clockwise circle (to
          the right). <br />
          * The store on your right belongs to you. That is where you keep the
          seeds you win. <br />
          * The six pits near you are your pits. <br />
          * Onlyuse one hand to pick up and put down seeds. <br />
          * Once you touch the seeds
          <br />
          in a pit, you must move those seeds. <br />
          * Only put seeds in your own
          <br />
          store, not your opponent’s store.
          <br />
        </p>
        <p>
          <span>Starting the Game:</span>
          <br />
          On a turn, a player picks up all the seeds in one pit and “sows” them
          to the right, placing one seed in each of the pits along the way. If
          you come to your store, then add a seed to your store and continue.
          You may end up putting seeds in your opponent’s pits along the way.
          <br />
          Play alternates back and forth, with opponents picking up the seeds in
          one of their pits and distributing them one at a time into the pits on
          the right, beginning in the pit immediately to the right.
        </p>
        <p>
          <span>Special Rules:</span>
          <br />
          *When the last seed in your hand lands in your store, take another
          turn. <br />
          *When the last seed in your hand lands in one of your own pits, if
          that pit had been empty you get to keep all of the seeds in your
          opponents pit on the opposite side. Put those captured seeds, as well
          as the last seed that you just played on your side, into the store.
        </p>
        <p>
          <span>Ending the Game:</span>
          <br />
          The game is over when one player’s pits are completely empty. The
          other player takes the seeds remaining in her pits and puts those
          seeds in her store. Count up the seeds. Whoever has the most seeds
          wins.
        </p>
        <br />
        <br />
        <p>Example of how to begin the game:</p>
        <div className='imageRules2'></div>
        <p>
          On the game board above, the pink player (bottom row) just made his
          first move of the game. He picked up all of the seeds from the third
          pit and placed one seed in each of the pits to the right. The final
          seed in his hand landed in his store, so he now gets to take another
          turn.
        </p>
      </section>
    </div>
  );
};

export default Rules;
