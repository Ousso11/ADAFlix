---
layout: default
title: Movies That Could Have Met a Different Success
---

<!-- <link rel="stylesheet" type="text/css" href="{% link assets/css/btn_styles.css %}"> -->

<p>
  Imagine possessing a revolutionary tool capable of predicting the success of your movie even before the cameras start rolling.
  This extraordinary tool not only identifies the elements your movie might be lacking but also imparts invaluable lessons gleaned from the triumphs of films that defied expectations. 
  Please join us, Mr. West and the esteemed TAs as we embark on an exploration of the origins and development of this groundbreaking tool.
  </p>
  <p>
  First, allow us to introduce <strong> Professor ZokOmo Predicto</strong>, the charismatic bear with a nose for cinematic success! With a furiously brilliant mind and a heart as warm as his fuzzy exterior, ZokOmo is here to unveil the revolutionary tool that will predict the triumphs of your movie before the first frame is even shot. Get ready to embark on a cinematic journey like never before !

</p>
<img src="images/zokomo1.png" alt="Film Production" style="width:100%; max-width:600; display:block; margin:auto;">


<h2 class="red-heading">"Let me tell you a little story about data"</h2>

<p>
"The CMU Movie Summary Corpus Dataset consists of 42,306 plot summaries and its meta data from movies, released from 1893 until 2013. 

Consider the box office revenues," he starts, his voice brimming with enthusiasm. 
</p>

<iframe src="assets/plots/box_office_distribution.html" width="100%" height="500px" style="border: none;"></iframe>


<p>
"The distribution you see is heavily skewed. To truly understand this pattern, I am applying a logarithmic transformation to the revenue data, thereby smoothing out these spikes and approximating a normal distribution. This step is essential for the sophisticated statistical analyses that follow."
</p>
<p>
He pauses for a moment, then proceeds, "let's start exploring the 23 distinctive genres where 22 genres stand individually, each with its unique identity, while the 23rd represents all remaining genres."
</p>
<iframe src="assets/plots/genre_revenue.html" width="100%" height="500px" style="border: none;"></iframe>

<p>
" At the very top of this list is the fantasy genre, making the most money on average. Following closely are family films, adventures, science fiction, and action genres, each contributing substantially to the financial symphony of the film industry. However, as the plot deepens, a nuanced reality surfaces. Toward the bottom of the list, the indie and world cinema genres come into focus." he added, acknowledging the value of diversity in film.
</p>

<p>

</p>
<p>
With a seamless transition, Professor ZokOmo shifted the focus to movie summaries. "Now, let's consider the language of cinema, as captured in movie summaries. Here we uncover a pattern most intriguing: the emotional charge of words. Positive and negative sentiments, ranging from 0 to 10 percent, interspersed with a majority of neutral expressions," he detailed, his finger tracing the shape of the graph in the air.
</p>
<p>
"The correlation between positivity in summaries and box office earnings is particularly shocking. Our analysis suggests that movies with a modest percentage of positivity, particularly those with 0 to 2 percent of feel-good words, yield the highest returns, while summaries overfilled with cheerfulness seem to correlate with lesser earnings," he observed, the surprise in his tone mirroring that of his audience.
</p>


<iframe src='assets/plots/pos_neg_revenue.html' width="100%" height="500px" style="border: none;"></iframe>

<p>
Clicking on the button "Negative words", he continued, "On the flip side, when we explore the percentage of negative words, we see another fascinating trend. The sweet spot for box office success lies subtly between 2 to 4 percent of negative words, with the interval of 2 to 4 percent being particularly golden. In summary, it is the equilibrium of emotion that appears to be most profitable. Films whose summaries are rich in neutral words, with just a hint of emotional undertones, seem to strike the right chord with audiences, leading to a more robust box office performance."
</p>


Our smart Professor continues: "Behold the curious relationship between a movie's duration and its box office revenue. This chart here uncovers a golden sweet spot, films ranging between 3 and 4 hours in duration appear to hit the jackpot in revenue generation."

<iframe src="assets/plots/runtime_revenue.html" width="100%" height="500px" style="border: none;"></iframe>

He switches to the other colorful box plot. "These initial three segments," he indicates the blue, red, and green boxes, "show considerable variability in earnings. It's a cinematic landscape rife with peaks and valleys. Yet, as we consider longer films, denoted by the purple and orange, the variance widens signifying a significant, yet risky territory for filmmakers." Professor Predicto leans in, as if sharing a secret with his audience. "Now, observe the interval between 3 to 4 hours. Here lies our pinnacle of profitability the fourth interval. The data points cluster tightly around the mean, with the median revenue standing proudly alongside. It's a harmonious distribution, scarce in outliers, indicative of a reliable return on investment."


With a nod and a knowing smile, he teases "In the grand finale of their quest, movies that are between 3 and 4 hours long make more money than all the other movies, whether they are longer or shorter."


<p>
  <strong>Professor Zokomo Predicto</strong> smiles warmly and says, "I'll be honest with you all, I was a bit worried at first. I wasn't sure we'd find anything useful in all these numbers and charts. But look at us now! We've got some great results that tell us a lot about movies and money. And you know what? I'm really excited to keep going and see what else we can learn about what makes a movie successful. So, let's keep exploring!"
</p>
<img src="images/zokomo.jpeg" alt="Film Production" style="width:100%; max-width:1000; display:block; margin:auto;">

<p>
Zokomo generates a bar chart that illustrates the average movie revenues adjusted for inflation across the most frequently used languages in his dataset. Then, he begins to unravel the next chapter of his analytical saga. "Now, let us journey through the linguistic landscape of cinema," he announces, pointing towards the first chart. " The chart reveals that languages such as Arabic and Russian tend to have higher average revenues. Surprisingly, the categories of English and Korean, on the other hand, exhibit lower average revenues, which is somewhat unexpected."
</p>
<p>
<iframe src="assets/plots/languages_bar_plot.html" width="100%" height="500px" style="border: none;"></iframe>
</p>


<p>
Zokomo plots then a bar chart that shows the mean log revenue for each selected language with 95% confidence intervals. He also creates a box plot demonstrating the distribution of logarithmic movie revenues for selected languages. Then he contuned: "Here we see the revenue distribution for movies in different languages, presented logarithmically. It's fascinating to observe how some languages, like Italian, achieve high average revenues, yet with a wide range of outcomes. Korean, on the other hand, displays narrower variability, hinting at a more consistent, though modest, revenue performance."
<p>
<iframe src="assets/plots/language_revenue.html" width="100%" height="500px" style="border: none;"></iframe>
</p>

He clicks on the box plot button and continues " We can notice that English and Korean languages show a greater range and many outliers. In particular, English displays a wide range, which is expected given the large number of English language films, including both high-revenue and lower-revenue films. However, languages such as Standard Mandarin and Cantonese show zero outliers, which implies a more consistent revenue performance across films in those languages"
</p>




<p>
Then, with a swift gesture, he shifts the audience's attention to the following visualization. "But when we look at the revenue by country, the plot thickens further. The bar chart here,"
</p>

<p>
<iframe src="assets/plots/countries_bar_plot.html" width="100%" height="500px" style="border: none;"></iframe>
</p>

<p>
He points to the bold red bars " These bars reveal that the mean revenue per country, shows substantial variations across different countries. The United States of America, United Kingdom, Australia and Germany demonstrate particularly high mean revenues, indicating a strong performance for films from these countries. Conversely, countries like Italy, Canada, France, Japan and Spain show relatively lower mean revenues, though they still contribute significantly to the global film industry. In contrast, South Korea's mean revenue is on the lowest side.
</p>


<p>
Zokomo employs then a box plot to illustrate the distribution of logarithmic movie revenues in countries that feature at least 50 movies in their dataset.
</p>
<p>
<iframe src="assets/plots/countries_box_plot.html" width="100%" height="500px" style="border: none;"></iframe>
</p>

<p>
Professor Predicto leans closer to the box plot beneath, his eyes tracing the medians and outliers. "The median log revenue remains relatively consistent across countries, with a few exceptions displaying higher or lower median revenues. Notably, countries such as the United States of America exhibit a broader range of log revenues, indicating substantial variability in their movie earnings.

While many countries display numerous outliers on the lower end of the revenue spectrum, only the United States of America stands out with outliers on the higher end. This observation suggests that the USA has movies with revenues significantly exceeding the typical range, potentially attributable to the fact that a substantial proportion of movies are produced there."


Zokomo's assessment suggests that choosing to produce a movie in the USA is an attractive option for producers who are willing to take some risks. Despite the inherent risk of falling below the average American movie revenue, the presence of numerous low outliers indicates the potential for below-average earnings. However, the USA stands out as the only country with high outliers, implying the possibility of achieving a more predictable, substantial revenue and even experiencing remarkable financial success. While this decision carries its share of risk, it may ultimately prove to be worthwhile.
</p>



<p>
Our bear is stunned by the results he got. Then, he continues the data analysis by plotting the bar plot of the log revenue for each month. "It appears," he announces with a hint of revelation in his voice, "that the prime season to debut a film is indeed June, with a marked advantage in box office returns. December and July follow suit, aligning neatly with the leisurely pace of student holidays."
</p>
<iframe src="assets/plots/months_revenue.html" width="100%" height="500px" style="border: none;"></iframe>


<p>
Zokomo indicates that from now on, as in many following feature analysis, he will be averaging log_revenues instead of averaging revenues. He says " this corresponds to computing the geometric mean instead of an arithmetic mean with the objective of gaining statistical stability. The geometric mean tends to be less sensitive to extreme values (outliers) compared to the arithmetic mean. This makes it a more robust measure in situations where there are significant variations in the data, since it represents better the central tendency. In my case, it is useful to penalize the big variances in revenues thus focusing on the consistency of the contribution of the analysed feature. "
</p>


<iframe src="assets/plots/actors_revenue.html" width="100%" height="500px" style="border: none;"></iframe>

<p>
Zokomo also says: " With geometric mean for actors, I am favoring those with consistent success over the ones who only participated in a few hits. A clear demonstration is that selecting the top actors with arithmetic mean results in many actors from harry potter or other sagas. This is because there are many film in these sagas with high revenues, which is boosting the actors mean revenues despite them not having much successful movies. "
</p>



<p>
With the same thoughtful consideration, Zokomo approaches the delicate balance of gender representation in film. He aims to dissect the percentages of female actors into equal groups, each representing a slice of the cinematic pie. "This categorization allows us to more accurately parse out the influence of actress representation on a film's financial outcome," he states. He decides to analyze whether there is a particular proportion that generates higher box office revenues. To this extend, he is studying the percentage of actresses in movies and how they relate to the box office revenues.
</p>

<p>
For that, our scientist is trying to perform an equal frequency discretization of the percentage of women, dividing percentages into 8 groups where there is an equal number of movies in each group. He thinks aht by doing it this way, then instead of feeding the final formula with an actual percentage of women, he will only use categorical variables.
</p>

<iframe src="assets/plots/women_revenue.html" width="100%" height="500px" style="border: none;"></iframe>
<p>

Pointing to the plot, Zokomo says: " We notice that movies with women percentages between 15% and 21% result in significantly higher box office revenues, followed by movies that have women percentages between 34% and 38%. While movies with 45% to 100% have significantly lower mean box office revenues, and their confidence intervals don't intersect with other intervals."
</p>

"Our findings here are not merely data points. They weave stories that reveal the intricate dance between cinema and its audience. The art of Film making is a complex interplay of timing, storytelling, and the representation of characters that beckons audiences into theaters. These insights pave our path to uncovering what might be the alchemical formula for box office gold." Content with the progress, Zokomo turns to ZokAdada, his wife who shares his passion for cinematic analytics.


<img src="images/zokada1.jpeg" alt="Film Production" style="width:50%; max-width:1000px; display:block; margin:auto;">

ZOKada, eager and bright-eyed, has been closely following Zokomo's work. With his findings in hand, she is now ready to embark on her own quest. Alongside her husband, a fellow data enthusiast, they are poised to construct a machine learning model. Their goal is to determine a magic formula that could predict a film's revenue based on the rich tapestry of features Zokomo has meticulously analyzed. 

<h2 class="red-heading">Formula </h2>

<p>

</p>

<h2 class="red-heading">Conclusion </h2>

<h2 class="red-heading">Outlier above </h2>
<img src="images/zokada2.png" alt="Film Production" style="width:50%; max-width:1000px; display:block; margin:auto;">

<h2 class="red-heading">Outlier below </h2>

<h2 class="red-heading">Final conclusion </h2>


