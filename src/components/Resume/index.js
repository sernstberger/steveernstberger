import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import resumeData from "./data";

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 700,
  },
  page: {
    // flexDirection: "row",
    backgroundColor: "#ffffff",
  },
  section: {
    // margin: 10,
    // padding: 10,
    marginTop: 10,
    // flexGrow: 1,
  },
});

const { jobs } = resumeData;

const Resume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Steve Ernstberger</Text>
        <Text>317.413.2489</Text>
        <Text>steve32285@gmail.com</Text>
        <Text>https://github.com/sernstberger</Text>

        <Text style={styles.title}>Expertise</Text>
        <Text>
          I am a Front-End Developer with 14 years of professional experience. I
          have worked with large enterprise clients like Cummins, Interactive
          Intelligence, and ExactTarget, start-ups with one employee, and
          everything in between. I currently work for Vemo Education, where I
          serve as the Lead Front-End Developer. I enjoy solving problems and
          creating beautiful interfaces that are easy to use on any device. In
          my free time I enjoy traveling, watching movies, playing trivia, and
          drawing.
        </Text>
        <Text style={styles.title}>Selected work</Text>
        <Text>fooooooo</Text>

        <Text style={styles.title}>Experience</Text>
      </View>
      {jobs.map((job) => {
        const {
          company,
          title,
          startDate,
          endDate = "present",
          description,
        } = job;
        return (
          <View style={styles.section} key={company}>
            <Text style={styles.title}>{title}</Text>

            <Text
              style={{ fontSize: 12, fontStyle: "italic", color: "#666666" }}
            >{`${company} | ${startDate} - ${endDate}`}</Text>
            {description &&
              description.map((single) => {
                return (
                  <Text style={{ fontSize: 12, marginTop: 4 }}>{single}</Text>
                );
              })}
          </View>
        );
      })}
    </Page>
  </Document>
);

export default Resume;
