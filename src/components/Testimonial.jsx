const Testimonial = () => {
  return (
    <section id="testimonial" className="section-container bg-background-dark">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-primary">Professional Testimonial</h3>
          </div>

          <div className="text-5xl text-accent/30 font-serif mb-4">"</div>

          <div className="space-y-4 text-text leading-relaxed">
            <p>
              I could write pages about her, but I will focus on one specific project that exemplifies Cassie's insightful, collaborative, and wholly generous artistic spirit. The SLAC Playwrights' Lab was an intensive developmental workshop process for new plays. I produced the Lab for four years, and Cassie was an actor in it. Actors in the Lab were always a vital part of the process, but there were a small handful who not only brought incredible talent to their roles, but could also see the play as a whole, and through their investigation of the characters, offered the writers deep and meaningful insights into their plays.
            </p>

            <p>
              Cassie was so instrumental in the development of the plays she worked on, that when SLAC decided to fully produce two of them, both of the artistic teams – writers and directors – insisted that Cassie play the roles she helped create.
            </p>

            <p className="font-medium italic">
              She is one of the most compelling actors I have ever watched on stage, and one of the most diligent collaborators I have seen in the rehearsal room. She inspires her colleagues to do their best work, and she takes every opportunity to dig deeper and tell the purest truth. 
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-accent/20">
            <p className="font-semibold text-primary text-lg">Shannon Musgrave</p>
            <p className="text-text-light">Director of Marketing & Communications</p>
            <p className="text-text-light">Carnegie Mellon University, School of Drama</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
