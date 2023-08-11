<template>
  <div>
    <Header />
    <div class="standard-page">
      <h2>Frequently Asked Questions</h2>
      <div class="faq-section">
        <button v-on:click="revealAnswer">How much does a lesson cost?</button>
        <div class="hidden">
          <p>We understand the constant demands on the family budget, so we keep our fees to a minimum. For current
            lesson costs see the <NuxtLink to="/tacs">fees</NuxtLink> page.</p>
        </div>
      </div>
      <div class="faq-section">
        <button v-on:click="revealAnswer">What else do I have to pay?</button>
        <div class="hidden">
          <p>While students are in a group rehearsal for a performance a small fee may be charged to cover costs. There
            are no costume charges as students wear their own clothes in performances.</p>
        </div>
      </div>
      <div class="faq-section">
        <button v-on:click="revealAnswer">Can I pay per lesson?</button>
        <div class="hidden">
          <p>Yes you can. Per lesson charges are at the higher casual rate. Per term fees are more economical.</p>
        </div>
      </div>
      <div class="faq-section">
        <button v-on:click="revealAnswer">What if I miss a lesson?</button>
        <div class="hidden">
          <p>Term students are able to do a make-up lesson within the same school term if a minimum of 24 hours minimum
            notice is given.</p>
          <p>Casual students also need to give 24 hours minimum notice or full fees are due for that lesson. See full
            details in ‘Terms & Conditions’.</p>
        </div>
      </div>
      <div class="faq-section">
        <button v-on:click="revealAnswer">Do I have to practice?</button>
        <div class="hidden">
          <p>No you don’t have to practice. However, like anything, the more you do it the better you will get at it, so
            practice is encouraged. Jacqui takes students at their own pace.</p>
        </div>
      </div>
      <div class="faq-section">
        <button v-on:click="revealAnswer">Are there any lessons during school holidays?</button>
        <div class="hidden">
          <p>No, not normally. Lessons are during the NSW Public School term. However, if students are in need of an
            extra lesson for a special performance, audition or music assessment, these can be arranged, depending on
            availability.</p>
        </div>
      </div>
      <div class="faq-section">
        <button v-on:click="revealAnswer">Do you help students choose their songs?</button>
        <div class="hidden">
          <p>The student is encouraged to pick songs they like and feel they would like to sing. It’s important, though,
            to make sure the songs are appropriate for the student, their ability and the performance situation.</p>
          <p>Ultimately, the choice of song is up to the student, however Jacqui will certainly help you make to the
            best choices.</p>
        </div>
      </div>
      <div class="faq-section">
        <button v-on:click="revealAnswer">Can you help me overcome being a nervous singer?</button>
        <div class="hidden">
          <p>Yes. Nerves are natural, even for some of the most experienced singers. This is an area Jacqui understands
            and addresses with the students.</p>
        </div>
      </div>
      <div class="faq-section">
        <button v-on:click="revealAnswer">Do you have clearance to work with children?</button>
        <div class="hidden">
          <p>Yes, Jacqui holds a Certificate for Self Employed People in child related employment (issued by NSW
            Commission for Children & Young People).</p>
          <p>NB <a
              href="https://www.service.nsw.gov.au/transaction/check-working-children-check-status">https://www.service.nsw.gov.au/transaction/check-working-children-check-status</a>
            – provides for more information about the certificate, why it’s required and who should have one.</p>
        </div>
      </div>
      <div class="faq-section">
        <button v-on:click="revealAnswer">What should I look for when choosing a teacher?</button>
        <div class="hidden">
          <p>What you need from your singing teacher depends on the reasons you wish to sing. Are you singing for fun,
            preparing for a one-off event, studying music at school or, even, about to take exams? Do you want to sing
            for yourself or to a wider audience? Are you singing in a band, a choir or going solo?</p>
          <p>Discuss your needs with the teacher and ask about their background and experience teaching specifically for
            your individual goals. Find out about the teacher’s qualifications and practical experience. Get a feel for
            the rapport the teacher will have with the student. Or simply ring and book a trial lesson.</p>
          <p>Also, in accordance with NSW law, if the student is under 18, the teacher requires a ‘Working with
            Children’ certificate. Ask them if they hold a current certificate, and ask to view it at your first lesson.
          </p>
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

.faq-section {
  margin-bottom: 10px;
}

button:hover {
  cursor: pointer;
}

div.hidden {
  display: none;
}

.faq-section .hidden {
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
