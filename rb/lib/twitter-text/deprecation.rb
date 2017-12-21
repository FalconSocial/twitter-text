module Twitter
  module TwitterText
    module Deprecation
      def deprecate(method, new_method = nil)
        deprecated_method = :"deprecated_#{method}"
        message = "Deprecation: `#{method}` is deprecated."
        message << " Please use `#{new_method}` instead." if new_method

        alias_method(deprecated_method, method)
        define_method method do |*args, &block|
          warn message unless $TESTING
          send(deprecated_method, *args, &block)
        end
      end
    end
  end
end
