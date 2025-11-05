const ArtistStatement = () => {
  return (
    <section id="statement" className="section-container bg-background-dark">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
          Artist Statement
        </h2>

        <div className="space-y-8">
          {/* Opening - Who I Am */}
          <div className="prose prose-lg max-w-none">
            <p className="text-text leading-relaxed text-lg">
              I am an actor with a passion for live performance who primarily works in theater. I love rehearsing,
              diving into a script, researching, watching other people work, asking questions, discovering the "ah ha"
              moments, learning about myself, doing the thing that scares me, and sharing stories with people in real
              time. Every performance is different because every audience is different and every time I take to the
              stage I am different. All of that is what, for me, makes theater so rewarding and important in its
              ability to reflect our humanity back to us, to move us viscerally.
            </p>
          </div>

          {/* Text and Breath - Core Philosophy */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-primary mb-4">My Practice: Text and Breath</h3>
            <div className="prose prose-lg max-w-none space-y-4">
              <p className="text-text leading-relaxed">
                As an actor I'm guided most expressly by the text and breath. The text serves as a map for the story,
                the character's journey, their objectives, their expression, and their relationships. Breath is what
                brings all of that to life, which I think sounds obvious, but is often easily forgotten. When I
                unconsciously hold my breath, I create tension in my body and am no longer living in the current moment,
                no longer connected to my vulnerability or to the audience. When I breathe, I engage my imagination and
                live more fully in my own truth and the truth of my character.
              </p>

              <p className="text-text leading-relaxed">
                I can access our similarities and differences and what I as a person am bringing into the room every
                time I show up to rehearse or perform. With a connection to text and the reminder to breathe, I can
                engage my body and voice, listen and respond from an open place, and trust my intuition. I can also
                get it wrong. In the end, what I hope to bring to the stage is a fully realized person an audience can
                breathe with and with whom my scene partners can play. I believe that is when live storytelling becomes
                its most powerful. And when in doubt, I return to the text.
              </p>
            </div>
          </div>

          {/* Values and Commitment */}
          <div className="prose prose-lg max-w-none">
            <p className="text-text leading-relaxed text-lg">
              I'm inspired by people who are brave enough to embrace and share their vulnerabilities because it reminds
              me I'm not alone—that we're all a little bit scared, that no one has it all entirely figured out, and
              since we don't make plays about people without conflict, I'm grateful for this reminder. I aspire to be
              an actor who listens to her fellow artists and advocates for all voices in the room.
            </p>

            <p className="text-text leading-relaxed text-lg">
              My eyes are open to the ways in which theater makers have failed historically excluded communities and
              the ways in which I have been complicit in that. As I move forward as an artist, I am fiercely dedicated
              to the continued peeling back of the onion, to using my voice, to creating theatrical spaces where
              everyone can play and work as their bravest, most authentic selves. I want to participate in and champion
              storytelling that is inclusive of all abilities, ethnicities, races, and identities.
            </p>
          </div>

          {/* Reflection on Growth */}
          <div className="bg-accent/10 rounded-lg p-8 border-l-4 border-accent">
            <h3 className="text-2xl font-bold text-primary mb-4">Evolution as an Artist</h3>
            <div className="prose prose-lg max-w-none space-y-4">
              <p className="text-text leading-relaxed">
                Living through the last two years has challenged my soul, my mind, and my heart in ways I never thought
                possible. It goes without saying that for artists whose work depends on their ability to gather, the
                pandemic has been uniquely challenging, but it has also taught me quite a bit about my own resilience
                as an artist. My artistic endeavors shifted to remote work and I accepted projects I might not have
                been brave enough to take on before 2020 turned everything upside down.
              </p>

              <p className="text-text leading-relaxed">
                I also worked less, felt depressed, became more politically involved than I have ever been before,
                began my journey of learning and unlearning the history of this country and the ways in which I've
                benefited from its deeply ingrained racism. I felt more depressed, I marched, I questioned, I read,
                I sat with my discomfort. I wrote bad haikus.
              </p>

              <p className="text-text leading-relaxed font-medium">
                As things begin to shift back to some sense of normalcy and people begin again to gather at the theater,
                I find myself feeling immensely grateful but I also feel a deep sense of responsibility to myself as an
                artist and a citizen of the world. I'm excited to keep learning and questioning in this next level of my
                career. I want to continue to search out artistic avenues that not only challenge me, but that are also
                socially responsible and inclusive. I can't have lived through the last two years and be the artist I was
                before, and thank goodness for that.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistStatement;
