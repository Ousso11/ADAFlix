---
layout: default
title: Movies That Could Have Met a Different Success
---

<link rel="stylesheet" type="text/css" href="{% link assets/css/btn_styles.css %}">

<p>
  Imagine possessing a revolutionary tool capable of predicting the success of your movie even before the cameras start rolling.
  This extraordinary tool not only identifies the essential elements your movie might be lacking but also imparts invaluable
  lessons gleaned from the triumphs of films that defied expectations. 
  <p>
    Meet <strong> Professor Zok Omo Predicto</strong>, the charismatic bear with a nose for cinematic success! With a furiously brilliant mind and a heart as warm as his fuzzy exterior, Professor Pawsome Predicto is here to unveil the revolutionary tool that will predict the triumphs of your movie before the first frame is even shot. Get ready to embark on a cinematic journey like never before, guided by the wisdom and wit of this lovable and insightful bear!
  </p>
</p>
<img src="images/zokomo1.png" alt="Film Production" style="width:100%; max-width:600; display:block; margin:auto;">
<p>
  Have you ever found yourself completely captivated by a movie, hanging on every twist and turn of the plot until the very end?
  Such is the impact of a well-crafted narrative. Yet, have you pondered the types of stories that consistently seize our attention
  and hold it until the credits roll? In this blog, we embark on an exploration of the most popular narrative arcs in the film
  industry, their profitability, and the evolution of these storylines over time.
</p>


# Let us tell you a little story about data

<p>
The CMU Movie Summary Corpus Dataset consists of 42,306 plot summaries and its meta data from movies, released in 1893 until 2013. 
![Interactive Graph](path/to/graph.png)
</p>

<iframe src="assets/plots/genre_revenue.html" width="100%" height="500px" style="border: none;"></iframe>

<p>
The story kicks off by exploring 23 distinctive genres. Among them, 22 genres stand individually, each with its unique identity, while the 23rd represents all remaining genres. At the heart of this cinematic journey is the examination of average revenues, revealing a hierarchy that molds the financial destiny of these genres.

At the very top of this list is the fantasy genre, making the most money on average. Following closely are family films, adventures, science fiction, and action genres, each contributing substantially to the financial symphony of the film industry.

However, as the plot deepens, a nuanced reality surfaces. Toward the bottom of the list, the indie and world cinema genres come into focus. Here, films within these genres tend to generate comparatively lower average revenues, adding complexity to the story and emphasizing the delicate balance between artistic expression and financial achievement.

In essence, the narrative paints a vivid portrait of the cinematic landscape, where financial success and artistic expression weave together in a compelling and eternal dance.
</p>


<p>
Next, we go into the movie summaries to discover a fascinating pattern. Positive words, those feel-good expressions, and their counterparts, the negative ones, each make up 0 to 10 percent of all words in these movie summaries. The rest of the words fall into the neutral territory, lacking any emotional charge.
</p>


<!-- Button to toggle plots -->

<div id="pos_neg_container"></div>

<button id="pos_neg_Button" onclick="pos_neg_switch()">Show Positive Plot</button>

<script src="{% link assets/js/pos_neg_btn.js %}"></script>  


  
    

<iframe src='assets/plots/neg_revenue_px.html' width="100%" height="500px" style="border: none;"></iframe>
<iframe src='assets/plots/pos_revenue_px.html' width="100%" height="500px" style="border: none;"></iframe>
<!-- <iframe src="assets/plots/pos_revenue_px.html" width="100%" height="500px" style="border: none;"></iframe> -->

<p>
As Zok Omo Predicto looked at positive words in movies, we noticed something interesting. The money these movies made matched up with how many positive words were in their summaries. The best part? Movies with 0% to 2% happy words made the most money on average, while those with 8% to 10% made the least. So, it seems like movies make more money when their summaries aren't too cheerful.
</p>

<!-- <iframe src="assets/plots/neg_revenue_px.html" width="100%" height="500px" style="border: none;"></iframe> -->

<p>
Switching gears to the negative side of the spectrum, we also categorized them into five intervals, ranging from 0-2% to 8-10%. The golden zone emerged between 2% and 4%, with the first interval doing really well and the second grabbing the top spot. Interestingly, the higher the percentage of negative words, the lower the average revenue.  
</p>
<p> 
Summing it all up, a general trend emerged. Movies that balanced the good and not-good feelings, favoring a wealth of neutral words in their summaries, tended to bring higher revenue. It seems that maintaining a balanced emotional tone pays off at the box office.
</p>
<p>

We then observe the mystical relationship between movie duration and average revenue. It reveals that the golden sweet spot for film duration lay between 3 and 4 hours—the fourth interval in our next plot.
</p>

<!-- Container for the plots 
<div id="runtime_container"></div>
<button id="runtime_Button" onclick="runtime_switch()">Show BOX Plot</button>


<script src="{% link assets/js/runtime_btn.js %}"></script> -->

<iframe src="assets/plots/runtime_mean_revenue.html" width="100%" height="500px" style="border: none;"></iframe>
<iframe src="assets/plots/runtime_box_revenue.html" width="100%" height="500px" style="border: none;"></iframe>

        
<p>
Initially, the revenue ascend with the runtime, reaching its peak in the fourth interval, only to descend for movies that dared to extend beyond 4 hours.
As we gaze upon the landscape of revenue fluctuations, we notice a curious phenomenon. The first three intervals exhibit little variance, suggesting that movies within these durations dance closely to the mean revenue of their respective intervals. However, the fourth and fifth intervals represent large variance. 
</p>
<p>
Turning the page, Professor Zok Omo encounter a box plot that deepens the conclusions extracted from the first plot . In this visual enchantment, the best interval (interval 4) emerge with its normal distribution to represent the highest average revenue. The mean and median stand shoulder to shoulder, and not a single outlier dares to disrupt the harmony. The other intervals, however, lack this equilibrium, with some struggling with the absence of the mean=median advantage and others haunted by an excess of outliers. 
<p>
In the grand finale of their quest, we conclude that films of a duration between 3 and 4 hours, movies that are between 3 and 4 hours long make more money than all the other movies, whether they are longer or shorter.
</p>

<p>
  <strong>Professor Zokomo Predicto</strong>, our smart bear guide, is pleased with his movie data findings. Now, he's eager to explore how the language in movies impacts their earnings. Let's find out the interesting discoveries he has in store!
</p>
<img src="images/ZokOmo.png" alt="Film Production" style="width:100%; max-width:1000; display:block; margin:auto;">


# Language
<p>

</p>

# countries

<p>

</p>

# year
<p>

</p>

# month
<p>

</p>

# character
<p>

</p>

# actor gender
<p>

</p>

# actor
<p>

</p>

# women %

<p>

</p>

# conclusion 
<p>

</p>


# formula 
<p>
<img src="images/ZokAda_formula.jpg" alt="Film Production" style="width:100%; max-width:1000px; display:block; margin:auto;">
</p>

# conclusion
<p>

</p>

# outlier above

<p>

</p>

# outlier below
<p>

</p>

# final conclusion


