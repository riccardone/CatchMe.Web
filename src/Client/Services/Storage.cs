using System;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.JSInterop;

namespace CatchMe.Web.Client.Services
{
    public static class Storage
    {
        public static async Task SetItem(IJSRuntime jsRuntime, string key, object value)
        {
            await SetItem(jsRuntime, key, value, 1800).ConfigureAwait(false);
        }
        public static async Task SetItem(IJSRuntime jsRuntime, string key, object value, int expiresInSeconds)
        {
            if (jsRuntime is null)
            {
                throw new ArgumentNullException(nameof(jsRuntime));
            }

            var serializedValue = JsonSerializer.Serialize(value);

            await jsRuntime.InvokeAsync<object>("localStorage.setItem", key, serializedValue).ConfigureAwait(false);
            await jsRuntime.InvokeAsync<object>("localStorage.setItem", $"{key}:exp", expiresInSeconds).ConfigureAwait(false);
        }
        public static async Task RemoveItem(IJSRuntime jsRuntime, string key)
        {
            if (jsRuntime is null)
            {
                throw new ArgumentNullException(nameof(jsRuntime));
            }

            await jsRuntime.InvokeAsync<object>("localStorage.removeItem", key).ConfigureAwait(false);
            await jsRuntime.InvokeAsync<object>("localStorage.removeItem", $"{key}:exp").ConfigureAwait(false);
        }
        public static async Task<T> GetItemAsync<T>(IJSRuntime jsRuntime, string key)
        {
            if (jsRuntime is null)
                throw new ArgumentNullException(nameof(jsRuntime));

            var result = await jsRuntime.InvokeAsync<string>("localStorage.getItem", key).ConfigureAwait(false);

            return JsonSerializer.Deserialize<T>(string.IsNullOrEmpty(result) ? "{}" : result);
        }
    }
}
