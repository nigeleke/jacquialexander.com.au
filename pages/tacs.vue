<template>
  <div>
    <Header />
    <div class="standard-page">
      <h2>Terms and Conditions</h2>
      <div class="tac-section">
        <button v-on:click="revealAnswer">Child/Student 18yrs & under – Term Based Lessons</button>
        <div class="hidden">
          <p>Suitable for students committed to singing at a discounted rate for full term payments (conditions apply).
            Part term is at casual rate or full term can be paid and make-up lessons had where time is available.</p>
          <p>Fees: $35 / ½ hour private lesson, paid by term in advance. (usually 10 or 11 weeks)</p>
          <button v-on:click="revealAnswer">Cancellations and make-up lessons:</button>
          <div class="hidden">
            <p>In the event that a student is unable to attend a lesson, a make-up lesson may be arranged provided that
              a vacancy exists and a minimum of five (5) working days cancellation notice has been received with the
              exception of illness. However, if less than 24 hours cancellation notice is given then there is no make-up
              lesson entitlement. Make-up lesson is to be taken within the same term of the cancelled lesson.
              Non-attendance at a make-up lesson will be deemed to be an attendance. N.B. Make-up lessons cannot be
              transferred to another time or day.</p>
          </div>
        </div>
      </div>
      <div class="tac-section">
        <button v-on:click="revealAnswer">Child/Student 18yrs & under – Casual Based Lessons</button>
        <div class="hidden">
          <p>Suitable for students who only want a few lessons per term, possibly due to busy schedules and inconsistent
            commitments etc.</p>
          <p>Fees: $40 / ½ hour private lesson</p>
          <button v-on:click="revealAnswer">Cancellations:</button>
          <div class="hidden">
            <p>24 hours notice is required, and reasonable, to cancel or reschedule a lesson, or full payment is still
              due.</p>
          </div>
        </div>
      </div>
      <div class="tac-section">
        <button v-on:click="revealAnswer">Shared Lessons (2 students) – Term or Casual</button>
        <div class="hidden">
          <p>Suitable for students who would like to share a lesson. These lessons involve students doing theory and
            warm-ups together and performing either solo or as a duo.</p>
          <p>Fees:</p>
          <p>Casual – $28 per person / ½ hour lesson</p>
          <p>Term – $25 per person / ½ hour lesson</p>
          <button v-on:click="revealAnswer">Cancellations:</button>
          <div class="hidden">
            <p>As above for term/casual. If only one student is able to attend lesson then the single student fee will
              apply, i.e. $35 (term), $40 (casual).</p>
          </div>
        </div>
      </div>
      <div class="tac-section">
        <button v-on:click="revealAnswer">Adult (over 18yrs)</button>
        <div class="hidden">
          <p>Adult lessons are on a casual basis; booked week to week.</p>
          <p>Fees: $45 / ½ hour private lesson</p>
          <button v-on:click="revealAnswer">Cancellations:</button>
          <div class="hidden">
            <p>24 hours notice is required, and reasonable, to cancel or reschedule a lesson, or full payment is still
              due.</p>
          </div>
        </div>
      </div>
      <div class="tac-section">
        <button v-on:click="revealAnswer">Conditions – Term & Casual</button>
        <div class="hidden">
          <h5>Enrolment</h5>
          <p>An enrolment form, signed with agreement of conditions, is required on or before the first lesson.</p>
          <h5>Term Dates</h5>
          <p>Same as Public School Terms (See <a
              href="https://education.nsw.gov.au/public-schools/going-to-a-public-school/calendars">Schools NSW</a>) No
            lessons on School Holidays, Pupil Free Days (public schools) or Public Holidays.</p>
          <h5>Resources</h5>
          <p>A student is required to provide all resources for private use outside lessons, e.g. Original sheet music,
            original songbooks, CD’s or Mp3’s for backing music, USB or CD’s for recording lessons.</p>
          <h5>Payment</h5>
          <p>Term-based payment is due on or by the second lesson of each term.</p>
          <p>Casual/Adult payment is due at the time of the lesson.</p>
          <p>Payment by Cash, Cheque, Money Order or Direct Deposit (See invoice for bank a/c details)</p>
          <p>A student will not be permitted to attend lessons without payment of fees.</p>
          <h5>Refunds</h5>
          <p>Fees are not refundable. Lessons can be transferred to another person in the same term.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  font-style: italic;
  font-size: large;
  border: none;
  background-color: white;
  padding-left: 0px;
}

p {
  margin-right: 200px;
}

.tac-section {
  margin-bottom: 10px;
}

button:hover {
  cursor: pointer;
}

div.hidden {
  display: none;
}

.tac-section .hidden {
  margin-left: 20px;
}
</style>

<script lang="ts">
export default {
  methods: {
    revealAnswer: function (event: { currentTarget: { nextElementSibling: any } }) {
      let sibling = event.currentTarget.nextElementSibling
      sibling.style.display = "block"
    }
  }
}
</script>
