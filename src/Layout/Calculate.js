import React from 'react'
import {
  Grid,
  Container,
  Form,
  Input,
  Label,
  Select,
  Button,
  Image
} from 'semantic-ui-react'

const calculate = props => {
  const styInput = {
    width: '100px'
  }

  const options = [
    { key: 'm', text: 'Male', value: 0 },
    { key: 'f', text: 'Female', value: 1 }
  ]

  const level = [
    { key: 'G', text: 'Graduate', value: 4 },
    { key: 'U', text: 'Ungrade', value: 3 },
    { key: 'H', text: 'High School', value: 2 },
    { key: 'M', text: 'Middle School', value: 1 },
    { key: 'O', text: 'Other', value: 0 }
  ]

  return (
    <Container textAlign="center">
      <Image
        src="https://res.cloudinary.com/getlinks/image/upload/v1481478099/ylksiakgcdw1uuzhvi5d.png"
        size="small"
        verticalAlign="middle"
        style={{ paddingTop: '4%' }}
      />
      <Grid
        textAlign="center"
        style={{ paddingTop: '4%' }}
        verticalAlign="middle"
      >
        <Grid.Row>
          <Grid.Column>
            <h1 style={{ paddingBottom: '2%' }}>Credit Scoring Calculator</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3} />
          <Grid.Column width={3} textAlign="left">
            <h3>Gender</h3>
          </Grid.Column>
          <Grid.Column width={6} textAlign="left">
            <Form.Field
              name="gender"
              control={Select}
              options={options}
              placeholder="Gender"
              onChange={props.handlerDropdown}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3} />
          <Grid.Column width={3} textAlign="left">
            <h3>Education Level</h3>
          </Grid.Column>
          <Grid.Column width={6} textAlign="left">
            <Form.Field
              name="edlevel"
              control={Select}
              options={level}
              placeholder="Education Level"
              onChange={props.handlerDropdown}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={1} />
          <Grid.Column width={3} textAlign="left">
            <h3>Period join Company</h3>
          </Grid.Column>
          <Grid.Column
            width={2}
            textAlign="left"
            style={{ paddingRight: '0px' }}
          >
            <Input
              name="year"
              placeholder="Year"
              labelPosition="right"
              style={styInput}
              onChange={props.handlerInput}
              type="number"
            >
              <input size="mini" style={{ width: '70%' }} />
              <Label>Year</Label>
            </Input>
          </Grid.Column>
          <Grid.Column
            width={2}
            textAlign="left"
            style={{ paddingLeft: '0px' }}
          >
            <Input
              name="month"
              placeholder="Month"
              labelPosition="right"
              style={styInput}
              type="number"
              onChange={props.handlerInput}
            >
              <input style={{ width: '85%' }} />
              <Label>Month</Label>
            </Input>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3} />
          <Grid.Column width={3} textAlign="left">
            <h3>Late in 6 Months</h3>
          </Grid.Column>
          <Grid.Column width={6} textAlign="left">
            <Input
              name="times"
              placeholder="times"
              labelPosition="right"
              style={{ width: '20%' }}
              type="number"
              onChange={props.handlerInput}
            >
              <input />
              <Label>times</Label>
            </Input>
          </Grid.Column>
        </Grid.Row>
        {props.calculate !== false ? (
          <Grid.Column
            textAlign="center"
            width={12}
            style={{ paddingTop: '2%' }}
          >
            <span style={{ fontSize: '28px' }}>
              <strong>Credit Score : </strong>
            </span>
            <span style={{ fontSize: '28px', color: 'red' }}>
              <strong>{props.creditscore}</strong>
            </span>
          </Grid.Column>
        ) : null}
        <Grid.Row textAlign="center" style={{ paddingTop: '2%' }}>
          <Button
            basic
            color="black"
            onClick={() => props.calculateCreditScore()}
          >
            calculate
          </Button>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default calculate
