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
import font from "./Bungee-Regular.ttf";
import foo from "./Roboto-Regular.ttf";
import blah from "./CrimsonPro-Regular.ttf";

const styles = StyleSheet.create({
  page: {
    // flexDirection: "row",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  header: {
    fontFamily: "Bungee",
    fontSize: 20,
    fontWeight: 700,
  },
  title: {
    color: "#666666",
    fontFamily: "Bungee",
    fontSize: 16,
    marginTop: 50,
  },
  subtitle: {
    fontFamily: "Bungee",
    fontSize: 14,
    fontWeight: 700,
  },
  section: {
    // margin: 10,
    // padding: 10,
    marginTop: 16,
    // flexGrow: 1,
  },
  paragraph: {
    fontSize: 14,
    marginTop: 4,
    fontFamily: "Crimson",
    lineHeight: 1.5,
  },
});

Font.register({
  family: "Bungee",
  src: font,
});

Font.register({
  family: "Roboto",
  src: foo,
});

Font.register({
  family: "Crimson",
  src: blah,
});

const { jobs } = resumeData;

const Resume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>Steve Ernstberger</Text>
        <Text style={styles.title}>Lead Front-End Developer</Text>
        <View style={{ display: "flex", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 12, fontFamily: "Roboto" }}>
            317.413.2489
          </Text>
          <Text style={{ fontSize: 12 }}>steve.ernstberger.dev@gmail.com</Text>
          <Text style={{ fontSize: 12 }}>github.com/sernstberger</Text>
        </View>

        <Text style={styles.title}>Expertise</Text>
        <Text style={styles.paragraph}>
          I am a Front-End Developer with 14 years of professional experience. I
          have worked with large enterprise clients like Cummins, Interactive
          Intelligence, and ExactTarget, start-ups with one employee, and
          everything in between. I currently work for Vemo Education, where I
          serve as the Lead Front-End Developer. I enjoy solving problems and
          creating beautiful interfaces that are easy to use on any device. In
          my free time I enjoy traveling, watching movies, playing trivia, and
          drawing.
        </Text>
        {/* <Text style={styles.title}>Selected work</Text>
        <Text>fooooooo</Text> */}

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
            <Text style={styles.subtitle}>{title}</Text>

            <Text
              style={{ fontSize: 12, fontStyle: "italic", color: "#666666" }}
            >{`${company} | ${startDate} - ${endDate}`}</Text>
            {description &&
              description.map((single) => {
                return (
                  <Text key={single} style={styles.paragraph}>
                    {single}
                  </Text>
                );
              })}
          </View>
        );
      })}
    </Page>
  </Document>
);

export default Resume;
