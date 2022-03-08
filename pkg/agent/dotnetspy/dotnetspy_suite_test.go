//go:build dotnetspy
// +build dotnetspy

package dotnetspy_test

import (
	"testing"

	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"
)

func TestDotnetSpy(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, ".NET Spy Suite")
}
