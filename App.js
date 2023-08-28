import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class LifecycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    // Binding the custom methods to the component instance
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  // Interval for incrementing count
  countInterval;

  // Lifecycle method: componentDidMount
  componentDidMount() {
    console.log('Component did mount');

    // Start an interval to increment the count every second
    this.countInterval = setInterval(() => {
      // Use apply to invoke incrementCount with a custom context
      this.incrementCount.apply({customContext: true});
    }, 1000);
  }

  // Lifecycle method: componentDidUpdate
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Component did update');
    }
  }

  // Custom method: incrementCount
  incrementCount() {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }
  decrementCount() {
    this.setState(prevState => ({
      count: prevState.count - 1,
    }));
  }

  // Lifecycle method: componentWillUnmount
  componentWillUnmount() {
    console.log('Component will unmount');

    // Clear the interval when the component unmounts
    clearInterval(this.countInterval);
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Count: {this.state.count}</Text>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={this.incrementCount}
          activeOpacity={0.7}>
          <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>
        {/* Conditional rendering for the Decrement button */}
        {this.state.count > 0 && (
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={this.decrementCount}
            activeOpacity={0.7}>
            <Text style={styles.buttonText}>Decrement</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  primaryButton: {
    marginHorizontal: 106,
    marginVertical: 22,
    paddingHorizontal: 22,
    maxWidthwidth: 140,
    paddingVertical: 12,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5E72E4',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    activeOpacity: 0.7,
  },
  buttonText: {
    color: 'brown',
  },
});
export default LifecycleComponent;
