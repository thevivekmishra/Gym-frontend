import React from 'react'

const WorkoutSession = () => {
  return (
    <section className='workout_session'>
      <div className='wrapper'>
        <h1>Top workout session</h1>
        <p>Our top workout sessions cater to all fitness needs. Strength Training builds muscle and strength with effective weightlifting exercises. Cardio Blast boosts heart health and burns calories through high-energy workouts like HIIT. Improve flexibility and balance with Yoga and Flexibility classes focusing on poses and breathing techniques. Functional Fitness enhances everyday movements with exercises that improve strength, stability, and mobility.</p>
        <img src="img5.jpg" alt="Workout session"></img>
      </div>
      <div className='wrapper'>
        <h1>Featured bootcamp</h1>
        <p>Transform your fitness with our diverse Featured Bootcamp programs, focusing on strength, cardio, flexibility, and functional fitness, tailored with expert guidance and personalized plans.</p>
        <div className="bootcamps">
          <div>
            <h4>Total Body Transformation Bootcamp</h4>
            <p>Our Total Body Transformation Bootcamp offers an intensive program aimed at improving overall fitness. Combining strength training, cardio, flexibility, and functional exercises, this bootcamp provides personalized workout plans and nutritional advice to help you achieve significant changes in your fitness levels.</p>
          </div>

          <div>
            <h4>Strength and Conditioning Bootcamp</h4>
            <p>The Strength and Conditioning Bootcamp focuses on building muscle and increasing strength through weightlifting and resistance training. Tailored for all fitness levels, this bootcamp ensures you gain the strength you need to meet your fitness goals.</p>
          </div>

          <div>
            <h4>Cardio Intensive Bootcamp</h4>
            <p>Our Cardio Intensive Bootcamp features high-energy sessions designed to boost heart health and maximize calorie burn. Incorporating running, cycling, and HIIT workouts, this bootcamp is perfect for those looking to enhance their cardiovascular fitness.</p>
          </div>

          <div>
            <h4>Yoga and Flexibility Bootcamp</h4>
            <p>The Yoga and Flexibility Bootcamp is designed to enhance flexibility and balance. Featuring guided yoga sessions and stretching routines, this bootcamp focuses on relaxation and strength, providing a holistic approach to fitness.</p>
          </div>

          <div>
            <h4>Functional Fitness Bootcamp</h4>
            <p>Our Functional Fitness Bootcamp aims to improve everyday movement and mobility through functional exercises that mimic real-life activities. This bootcamp enhances strength, stability, and overall fitness, making daily activities easier and more efficient.</p>
          </div>

          
        </div>
      </div>

    </section>
  )
}

export default WorkoutSession