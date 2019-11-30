<template>
 <div class="main">
  <section class="timeline" >
    <ul>
      <li v-for="(school, index) in schools" :key="index">
        <span></span>
        <div>{{ school.school }}</div>
        <div>{{ school.type }}</div>
        <div class="year">
          <span>{{ school.yearEnd }}</span>
          <span>{{ school.yearStart }}</span>
        </div>
      </li>
    </ul>
  </section>
</div>
</template>

<script>
export default {
  name: 'Timeline',
  data: () => {
    return {
      schools: [
        {
          school: "STMIK STIKOM Bali",
          type: "University | S1 - in Sistem Informasi",
          yearStart: "2015",
          yearEnd: "2019"
        },
        {
          school: "SMA PGRI 4 Denpasar",
          type: "High School | IPA",
          yearStart: "2012",
          yearEnd: "2015"
        },
        {
          school: "SMPN 2 Denpasar",
          type: "Junior High School",
          yearStart: "2009",
          yearEnd: "2012"
        },
        {
          school: "SD 14 Pemecutan",
          type: "Elementary School",
          yearStart: "2003",
          yearEnd: "2009"
        },
      ]
    }
  }
}
</script>

<style scoped lang="less">
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #fff;
}

.main {
    margin: 1em auto;
    padding: 40px;
    background: #6c63ff;
    border-radius: 4px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
}

.timeline {
    padding: 1px 45px;
}

.timeline ul {
    position: relative;
}

.timeline ul::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
}

.timeline li {
    position: relative;
    margin: 60px 35px;
    width: 100%;
    list-style: none;
    line-height: 25px;
}

.timeline li > span {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    left: -25px;
    height: 110%;
    border: 2px solid #fff;
    border-radius: none;
}

.timeline li > span::before, .timeline li > span::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 14px;
    height: 14px;
    border: 3px solid #fff;
    border-radius: 50%;
    left: -7px;
    background: #4e9bfa;
}

.timeline li > span::before {
    top: -15px;
}

.timeline li > span::after {
    top: 100%;
}

.timeline li div:nth-child(2) {
    font-size: 1.2em;
}

.timeline li div:nth-child(3), .timeline li div:nth-child(4) {
    font-size: 1em;
    font-style: italic;
    color: #fff;
}

.timeline li .year span {
    position: absolute;
    font-size: 1em;
    left: -85px;
    width: 40px;
    text-align: right;
}

.timeline li .year span:first-child {
    top: -20px;
}

.timeline li .year span:last-child {
    top: 100%;
}

</style>
