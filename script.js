

/* game outcome function */
function computerPlay()
{
  return Math.floor(Math.random() * 3);

   if (prob == 1)
     {
      return "rock";
     }
   else if (prob == 2)
     {
      return "paper";
     }

   return "scissors";
}

console.log('computerPlay');